import React from "react";
import CSS from 'csstype';

export default function PreloaderStar() {

    const preloaderWrapperStyles: CSS.Properties = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        top: 0
    }

    return (
        <div style={preloaderWrapperStyles}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64px" height="64px" viewBox="0 0 128 128"><g><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fa6342"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fffbfa" transform="rotate(30 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fff1ee" transform="rotate(60 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fee5df" transform="rotate(90 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fed7cf" transform="rotate(120 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fdc9bd" transform="rotate(150 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fdbaab" transform="rotate(180 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fca997" transform="rotate(210 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fc9a85" transform="rotate(240 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fb8b72" transform="rotate(270 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fb7d61" transform="rotate(300 64 64)"/><path d="M64 0l2.48 7.64h8.02L68 12.36 70.5 20 64 15.28 57.5 20l2.5-7.64-6.5-4.72h8.02z" fill="#fa7052" transform="rotate(330 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform></g></svg>
        </div>
    )
}