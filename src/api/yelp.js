import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 5quJfzv3j8Y96-fNHhpzOp2To4IVY6vPfaIa7qWMAwfeNvavk3BfwyMNOlioZbeIXJPspQcSqTDTvSSDdZVwRNbCgkvcenRf9pCPz_Fh9dtVXy7_aRmd9n4-isA7W3Yx',
  }
});