export interface Request {
    url: string;
    method?: string;
    type?: string;
    data?: any;
}

export default function (req: Request, cb: (data: any) => void, error?: (err: XMLHttpRequest) => void) {
    var xhr = new XMLHttpRequest();
    xhr.open(req.method || 'GET', req.url, true);
    if (localStorage.token) xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.token);
    xhr.setRequestHeader('Content-type', req.type || 'application/json');
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status >= 200 && this.status < 400) {
            try {
                cb(JSON.parse(this.responseText));
            } catch (e) {
                if (error) error(this);
            }
        } else if (error) {
            error(this);
        }
    };
    xhr.send(req.data || null);
}
