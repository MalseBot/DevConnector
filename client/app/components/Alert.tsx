import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeAlert } from "../store/slices/alertSlice"




const Alert = ()=>{
    const dispatch = useAppDispatch();
    const alerts = useAppSelector((state)=>state.alert.alerts)

    useEffect(()=>{
        alerts.forEach((alert)=>{
            if(alert.duration){
                const timer = setTimeout(()=>{
                    dispatch(removeAlert(alert.id))
                },alert.duration)
                return ()=> clearTimeout(timer)
            }
        })
    },[alerts,dispatch])

    const getAlertStyles = (type: string): string => {
			const baseStyles =
				'p-4 mb-2 rounded-lg shadow-lg transition-all duration-300 transform';

			switch (type) {
				case 'success':
					return `${baseStyles} bg-green-100 border border-green-400 text-green-700`;
				case 'error':
					return `${baseStyles} bg-red-100 border border-red-400 text-red-700`;
				case 'warning':
					return `${baseStyles} bg-yellow-100 border border-yellow-400 text-yellow-700`;
				case 'info':
					return `${baseStyles} bg-blue-100 border border-blue-400 text-blue-700`;
				default:
					return `${baseStyles} bg-gray-100 border border-gray-400 text-gray-700`;
			}
		};

if(alerts.length === 0 )return null

    return (
			<div className='fixed bottom-4 right-4 z-50 w-80 max-w-full'>
				{alerts.map((alert) => (
					<div
						key={alert.id}
						className={getAlertStyles(alert.type)}>
						<div className='flex justify-between items-start'>
							<span className='flex-1'>{alert.message}</span>
							<button
								onClick={() => dispatch(removeAlert(alert.id))}
								className='ml-2 text-lg font-bold hover:opacity-70 transition-opacity'
								aria-label='Close alert'>
								&times;
							</button>
						</div>
					</div>
				))}
			</div>
		);
}

export default Alert