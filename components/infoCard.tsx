import type { NextPage } from "next";


import styles from "../styles/components/InfoCard.module.css"

export interface PropsShape {
    head: String,
    span: String,
    position: String,
    points: String[]

}

function createMarkup() {
    return {__html: 'First &middot; Second'};
  }


const InfoCard: NextPage<PropsShape> = ({ head, span, position, points }) => {

    return (
        <>
            <div className={styles.item}>
                <div className={styles.item_top}>
                    <h5>{head}</h5><span>( {span} )</span>
                </div>
                <h3>{position}</h3>
                <ul>

                {

                    points.map((point, index) => {
                        return (
                            <li key={index} dangerouslySetInnerHTML={{ __html: `${point}` }}>
                            </li>
                            )
                    })
                }
                </ul>

            </div>
        </>
    )
}

export default InfoCard;