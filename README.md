# Stock Data Visualiser

This is a simple stock data visualiser that uses the [Alpha Vantage API](https://www.alphavantage.co/documentation/) to get stock data. I built this to learn more about data crunching and visualisation, and this is my final project for [CS50x](https://cs50.harvard.edu/x).

The aim of this project is to build a fully functional LSTM model that predicts future stock prices based on historical prices using PyTorch. It is currently in development, and I will be adding more features as I learn more about data visualisation.

![IBM Stock Price Prediction](static/images/graph.png)

## Installation

To install the required packages, run the following command:

```bash
pip install -r requirements.txt
```

## Usage

You can either run the program using the command line, or by using the Jupyter Notebook (locally or on Google Colab - recommended).

### Command Line

To run the program using the command line, run the following command:

```bash
python lstm-model/train.py
```

**Experimental: I am currently developing a web app to pair with this project.** You can run the web app using the following command:

```bash
cd client
yarn install
yarn run dev
```

## Next Steps

- [ ] Build web app using Flask/Next.js
  - [ ] Integrate model into web app
  - [ ] Request for academic data acess from Alpha Vantage
  - [ ] Add more features to the web app (e.g. stock graph, crypto data, etc.)
- [ ] Refine model code to make it more efficient and accurate
  - [ ] Tweak configurations
- [ ] Documentations
  - [ ] Build documentation using Sphinx/Nextra
  - [ ] Deploy documentation using Vercel if using Nextra
  - [ ] Add more comments to code

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate. If you have any questions, feel free to open an issue. I will try to respond as soon as possible.
