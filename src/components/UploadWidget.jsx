import { useEffect, useRef } from "react"

export default function UploadWidget() {
    const cloudinaryRef = useRef()
    
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
    })
}