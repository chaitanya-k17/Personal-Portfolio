import type { NextPage } from "next";


import styles from "../styles/components/InfoCard.module.css"

export interface PropsShape {
    head: String,
    span: String,
    position: String,
    points: String[]

}


const InfoCard: NextPage<PropsShape> = ({ head, span, position, points }) => {

    return (
        <>
            <div className={styles.item}>
                <div className={styles.item_top}>
                    <h5>{head}</h5><span>( {span} )</span>
                </div>
                <h3>{position}</h3>
                {

                    points.map((point, index) => {
                        return (
                            <p key={index} >
                                {point}
                            </p>)
                    })
                }

            </div>
        </>
    )
}

export default InfoCard;