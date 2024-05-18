import RestaurantLogin from '../_components/restaurantLogin'
import RestaurantSignUp from '../_components/restaurantSignUp';
const Restaurant = () => {
    return(
        <>
        <h1>Restaurant login/Signup Page</h1>
        <RestaurantLogin />
        <RestaurantSignUp />
        <button>Already have Account? Login</button>

        </>
    )
}

export default Restaurant;