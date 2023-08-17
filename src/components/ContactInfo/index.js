export function ContactIcon({ type }) {
	return (
		<div className={`contact-icon ${type}`} />
	);
}

export function ContactInfo() {
	return (
		<address className="contact-info">
			<p className="contact-info-line contact-info-phone">
				<ContactIcon type="phone" />
				<a className="contact-info-link" href="tel:+995555758598">+995 555 75 85 98</a>
			</p>
			<p className="contact-info-line contact-info-messenger">
				<ContactIcon type="telegram" />
				<a className="contact-info-link" href="https://t.me/y82ndgaki">Telegram</a>
			</p>
			<p className="contact-info-line contact-info-messenger">
				<ContactIcon type="whatsapp" />
				<a className="contact-info-link" href="https://wa.me/995555758598">WhatsApp</a>
			</p>
		</address>
	);
}