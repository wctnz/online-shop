import React, { useState, useEffect } from "react";
import Item from "./item";

export default function Shop() {
const [items, setItems] = useState();
const [loader, setLoader] = useState(false);

useEffect(() => {
(async () => {
setLoader(true);

try {
const response = await fetch(
"https://learn.guidedao.xyz/api/student/products"
);
const data = await response.json();
if (data) {
console.log(data);
setItems(data[0][0]);
}
} catch (error) {
console.error(error);
} finally {
setLoader(false);
}
})();
}, []);

if (loader) {
return <p>Идет загрузка...</p>;
}

if (!items) {
return null;
}

return (
<>
<div className="shop">
{items.map((item) => (
<Item key={item.id} info={item} />
))}
</div>
</>
);
}