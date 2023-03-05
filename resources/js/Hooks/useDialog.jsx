import {Modal} from 'bootstrap'
import React, {useRef} from 'react'

export default function useDialog() {
	const modal = useRef(null)
	

	return [
		modal,
		 open = () => new Modal(modal.current).show(),
		 close = () => Modal.getInstance(modal.current).hide(),
	]
	
}
