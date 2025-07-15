export default function Price({ oldPrice, newPrice }) {
    return (
        <div className="price">
            <span className="original-price">{oldPrice}</span>
            <span className="current-price">{newPrice}</span>
        </div>
    );
}
