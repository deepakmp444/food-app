package util

// Restaurant represents the structure of a restaurant document
type Restaurant struct {
    ID             string  `bson:"_id"`
    Name           string  `bson:"restaurant_name"`
    Type           string  `bson:"restaurant_type"`
    Rating         float64 `bson:"rate"`
    NumOfRatings   int     `bson:"num_of_ratings"`
    AvgCost        int     `bson:"avg_cost"`
    OnlineOrder    string  `bson:"online_order"`
    TableBooking   string  `bson:"table_booking"`
    Cuisines       string  `bson:"cuisines_type"`
    Area           string  `bson:"area"`
    LocalAddress   string  `bson:"local_address"`
}
