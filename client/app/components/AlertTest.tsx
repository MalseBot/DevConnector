"use client";
import { useAlert } from '../store/hooks/useAlert';

const AlertTest = () => {
    const { showAlert } = useAlert();
    const handleClick = () => {
        showAlert({
            type: 'success',
            message: 'This is a success alert!',
            duration: 3000,
        })
    }
  return (
    <div><button onClick={handleClick}>click me</button></div>
  )
}

export default AlertTest