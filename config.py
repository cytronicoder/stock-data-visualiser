config = {
    "alpha_vantage": {
        "key": "demo",  # Demo key from Alpha Vantage to test the code
        "symbol": "IBM", # IBM stock for demo purposes
        "output_size": "full",
        "key_adjusted_close": "5. adjusted close",
    },
    "data": {
        "window_size": 20,
        "train_split_size": 0.80,
    },
    "plots": {
        "xticks_interval": 90,  # Plot xticks every 90 days
        "color_actual": "#001f3f",
        "color_train": "#3D9970",
        "color_val": "#0074D9",
        "color_pred_train": "#3D9970",
        "color_pred_val": "#0074D9",
        "color_pred_test": "#FF4136",
    },
    "model": {
        "input_size": 1,  # Number of features
        "num_lstm_layers": 2,
        "lstm_size": 32,
        "dropout": 0.2,
    },
    "training": {
        "device": "cpu",  # Use "cuda" if you have a GPU
        
        # Adjust the following parameters to your needs
        "batch_size": 64,
        "num_epoch": 100, # Number of epochs
        "learning_rate": 0.01,
        "scheduler_step_size": 40,
    },
}
