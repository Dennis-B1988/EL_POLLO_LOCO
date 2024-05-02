const level_1 = new Level(
    [
        new Chicken(), new Chicken(), new Chicken(), new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject('./assets/img/5_background/layers/air.png', -700),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', -700),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', -700),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', -700),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 700),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 700),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 700),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 700),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 700 * 2),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 700 * 2),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 700 * 2),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 700 * 2),
    ]
);