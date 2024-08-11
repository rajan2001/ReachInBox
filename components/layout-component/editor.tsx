"use client"
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

export const Editor = ({ value, setValue }: any) => {

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    return <>
        <div className=" flex-1">
            <ReactQuill theme="snow" className='h-full' value={value} onChange={setValue} />
        </div>
    </>

}