const PriceRating = ({ priceRating }) => {
    return <span className="price-rating">
        <span>{"$".repeat(priceRating)}</span>
        <span style={{color: '#d3d3d3'}}>{"$".repeat(4 - priceRating)}</span>
    </span>;
}

export default PriceRating;
