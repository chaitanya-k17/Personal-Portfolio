import type { NextPage } from "next";
import { useState } from "react";


import styles from "../styles/components/ProgressBar.module.css"

export interface PropsShape {
    head: String,
    value: Number,
}


const ProgressBar: NextPage<PropsShape> = ({ head, value }) => {

    const [r,setr]= useState(100-+value);

    return (
        <div className={styles.progress_item}
            data-value="92">
            <div className={styles.item_in}>
                <h3 className={styles.progress_title}>{head}</h3>
                <span className={styles.progress_percent}
                style={{ right:  r+'%'}}
                
                >{value + "%"}</span>
                <div className={styles.bg_wrap}>
                    <div className={styles.progress_bg} 
                        style={{ width:value+'%'}}
                    >
                    </div>
                </div>
            </div>
        </div>
    );



}

export default ProgressBar;