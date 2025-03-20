




router.post("/", (req, res) => {
    const newRestaurant = Restaurant.create(req.body);
    res,json(newRestaurant)
})