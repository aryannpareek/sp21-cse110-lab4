let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const property in statistics)
{
    if (property.toLowerCase().startsWith('r') || statistics[property] % 2 != 0)
    {
        console.log(`${property}: ${statistics[property]}`);
    }
}