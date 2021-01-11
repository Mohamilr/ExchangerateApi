![](https://github.com/mohamilr/ExchangerateApi/workflows/CI/badge.svg)
# ExchangerateApi
The Api fetches currency exchange rates integrating the [exchange rate api](https://exchangeratesapi.io)

## Endpoint 
### Get
As an example, a request to fetch the currency exchange rates from `CZK` to `EUR,GBP,USD`  will look like: <br>
https://enye-exchangerate-api.herokuapp.com/api/rates?base=CZK&currency=EUR,GBP,USD

### Response
```
{
    "results": {
        "base": "CZK",
        "date": "2020-11-17",
        "rates": {
            "EUR": 0.0377244605,
            "GBP": 0.033795458,
            "USD": 0.044824204
        }
    }
}
```
