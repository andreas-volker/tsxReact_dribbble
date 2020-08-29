/// <reference types="react-scripts" />
import Request from 'utils/ajax';

declare module 'utils/ajax' {
    export default function ajax(req: Request, cb: (data: any) => void, error?: (err: XMLHttpRequest) => void): void;
}
