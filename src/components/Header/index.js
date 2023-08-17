import { ContactInfo } from "../ContactInfo";

export function Header() {
	return (
		<header className="page-header">
			<div className="page-header-main">
				<div className="page-titles">
					<h1 className="page-header-name">Сантехника, электрика, ремонт</h1>
					<p className="page-header-location">Тбилиси, Грузия</p>
					<h2 className="page-header-occupation">Михаил Бородин, мастер</h2>
				</div>
				<div className="page-header-contact-info">
					<ContactInfo />
				</div>
			</div>
			<div className="page-header-appointment">
				<a href="https://calendly.com/plumber-electrician-tbilisi/appointment" target="_blank" className="page-header-appointment-link">Записаться онлайн</a>
				<a href="tel:+995555758598" className="page-header-appointment-link call">Позвонить</a>
			</div>
		</header>
	)
}