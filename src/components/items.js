import Item from './item'
const Items = ({itemsList, onDelete, onToggle}) => {
    return (
        <>
            <ul className="item-group">
                {itemsList.map(item => <Item 
                    item={item} 
                    onDelete={onDelete}
                    onToggle={onToggle}
                    />
                    )}
            </ul>
        </>
    )
}

export default Items
