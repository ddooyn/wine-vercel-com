export interface Wine {
    winery: string,
    wine: string,
    rating: {
        average: string,
        reviews: string
    },
    location: string,
    image: string,
    id: number
}

// 결합도 가능
// interface WineRating {
//     average: string,
//     reviews: string
// }