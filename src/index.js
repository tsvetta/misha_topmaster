import PriceTable from './components/PriceTable';

import './style';

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

export function Footer() {
	return (
		<footer className="page-footer">
			<ContactInfo />
		</footer>
	)
}

export default function App() {
	document.title = 'Михаил Бородин | Сантехника, электрика | Тбилиси, Грузия';

	return (
		<>
			<Header />

			<main className="page-content">
				<section className="page-section">
					<h3 className="page-section-title" id="price">Прайс</h3>
					<div className="section-description">
						<p><strong className="strong-text">Гарантия на работу</strong>. Если после работ обнаружатся проблемы, мастер приезжает бесплатно.</p>
						<p><strong className="strong-text">Цены на расходники не включены</strong>. Примеры минимальных цен на расходники в Тбилиси можно увидеть в <a href="#faq">FAQ</a>.</p>
						<p><strong className="strong-text">Минимальная цена выезда – 40 ₾</strong>. К примеру, если вам требуется 1-2 мелкие работы по 10 ₾, то цена выезда и работ вместе останется 40 ₾. Если нужны 2 работы по 20 ₾, общая сумма тоже будет 40 ₾.</p>
					</div>

					<PriceTable />
				</section>

				<section className="page-section">
					<h3 className="page-section-title" id="faq">FAQ</h3>

					<ol className="description-ordered-list">
						<li>
							<div className="section-description">
								<p>Примеры минимальных цен на расходники в Тбилиси:</p>
								<ul className="text-list">
									<li>смеситель – 20 ₾</li>
									<li>сифон – 20 ₾</li>
									<li>поплавок – 10 ₾</li>
									<li>розетка – 5 ₾</li>
									<li>выключатель – 5 ₾</li>
								</ul>
							</div>
						</li>

						<li>
							<div className="section-description">
								<p><strong className="strong-text">Должны ли вы сами покупать расходники?</strong></p>
								<p>Это не обязательно, обычно мастер покупает сам по вашему описанию. Исключение – если вам требуется что-то необычное и это затруднительно найти. В таком случае вам стоит купить расходник самостоятельно, либо мастер возьмет дополнительную сумму, в зависимости от сложности поиска.</p>
							</div>
						</li>
					</ol>
				</section>
			</main>

			<Footer />
		</>
	);
}
