import styles from './index.css';

import pricesData from '../../data/prices.json';

export function ServicesTable({ hiddenPrices }) {
    return (
        <table className="price-table">
            <tbody>
                {pricesData.map((sectionData) => {
                    return (<>
                        <tr>
                            <td colspan="2" className={styles.columnWide}>{sectionData.sectionName}</td>
                        </tr>
                        {sectionData.content.map((sectionContent) => (
                            <tr>
                                <td className={styles.column1}>{sectionContent.name}</td>
                                {hiddenPrices ? null : <td className={styles.column2}>{sectionContent.price}</td>}
                            </tr>
                        ))}
                    </>)
                })}
            </tbody>
        </table>
    );
}