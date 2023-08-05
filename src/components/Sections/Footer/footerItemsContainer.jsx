import { Item } from "./item"
//footer menu items are stored in arrays 
import { PRODUCT,COMPANY,SUPPORT } from "./menu"

export const FooterItemsContainer = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 py-16  ">
        <Item links = {PRODUCT} title='PRODUCT' />
        <Item links = {COMPANY} title='COMPANY'/>
        <Item links = {SUPPORT} title='SUPPORT'/>
    </div>
  )
}
