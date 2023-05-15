import React, { useState } from "react";
import styles from "./Item.module.css"

export default function Item(props) {
const [total, setTotal] = useState(0);

const { info } = props;

function handleAddClick() {
setTotal(total + 1);
}

function handleRemoveClick() {
if (total > 0) {
setTotal(total - 1);
}
}

return (
<div className="item">
<img src={info.image} alt="" className={styles.cardImage}/>
<div className={styles.itemInfo}>
<h2>{info.name}</h2>
<p>{info.desc}</p>
</div>
<div className={styles.itemQuantity}>
<button 
itemButton
className={styles.itemButton}
disabled={total === 0}
onClick={handleRemoveClick}
>
-
</button>
<h3 className={styles.itemTotal}>{total ? total : ""}</h3>
<button itemButton className={styles.itemButton} onClick={handleAddClick}>
+
</button>
</div>
</div>
);
}