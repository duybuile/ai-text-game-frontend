// Messages.jsx
import React, {useEffect, useRef} from 'react'
import {ListGroup} from 'react-bootstrap'
import Message from './Message'

const Messages = ({messages, me}) => {
	const bottomRef = useRef(null)

	useEffect(() => {
		if (bottomRef && bottomRef.current) {
			bottomRef.current.scrollIntoView({behavior: 'smooth'})
		}
	}, [messages])

	return (
		<ListGroup style={{listStyleType: 'none', padding: 0, width: '100%'}}>
			{messages.map((message, index) => (
				<ListGroup.Item
					key={index}
					style={{marginBottom: '10px', background: 'none', border: 'none'}}
				>
					<Message member={message.member} data={message.data} me={me} />
				</ListGroup.Item>
			))}
			<div ref={bottomRef}></div>
		</ListGroup>
	)
}

export default Messages
