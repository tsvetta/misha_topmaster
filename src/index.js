import { Header } from './components/Header';
import { PriceTable } from './components/PriceTable';
import { Footer } from './components/Footer';

import './style';

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
						<p><strong className="strong-text">Цены на расходники не включены</strong>. Примеры минимальных цен на расходники в Тбилиси можно увидеть в <a href="#min-prices">FAQ</a>.</p>
						<p><strong className="strong-text">Минимальная цена выезда – 40 ₾</strong>. К примеру, если вам требуется 1-2 мелкие работы по 10 ₾, то цена выезда и работ вместе останется 40 ₾. Если нужны 2 работы по 20 ₾, общая сумма тоже будет 40 ₾.</p>
					</div>

					<PriceTable />
				</section>

				<section className="page-section">
					<h3 className="page-section-title" id="faq">FAQ</h3>
					<div className="section-description">
						<dl>
							<dt id="min-prices">
								<p>Примеры минимальных цен на расходники в Тбилиси:</p>
							</dt>
							<dd>
								<ul className="text-list">
									<li>смеситель – 20 ₾</li>
									<li>сифон – 20 ₾</li>
									<li>поплавок – 10 ₾</li>
									<li>розетка – 5 ₾</li>
									<li>выключатель – 5 ₾</li>
									<li>герметик – 10 ₾</li>
								</ul>
							</dd>

							<dt>
								<p>Должны ли вы сами покупать расходники?</p>
							</dt>
							<dd>
								<p>Это не обязательно, обычно мастер покупает всё сам по вашему описанию. Исключение – если вам требуется что-то необычное и это затруднительно найти. В таком случае вам стоит купить расходник самостоятельно, предварительно проконсультировавшись с мастером. По договоренности, мастер возьмется за поиск детали, цена услуги от 10 ₾, зависит от сложности поиска.</p>
							</dd>

						</dl>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
