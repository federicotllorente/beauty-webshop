import { useState, useEffect } from 'react'

const useIsMobile = breakpoint => {
	const [isMobile, setIsMobile] = useState(true)

	const handleResize = () => {
		if (window.innerWidth > breakpoint) {
			setIsMobile(false)
		}
		if (window.innerWidth <= breakpoint) {
			setIsMobile(true)
		}
	}

	useEffect(() => {
		if (window.innerWidth > breakpoint) {
			setIsMobile(false)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return isMobile
}

export default useIsMobile