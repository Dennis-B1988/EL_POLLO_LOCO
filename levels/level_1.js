let level_1;

/**
 * Initialize the game level with chickens, small chickens, an end boss, clouds, background objects, bottles, and coins.
 */
function initLevel(){
    level_1 = new Level(
        [
            new Chicken(0, 500), 
            new Chicken(1, 650), 
            new Chicken(2, 1200),
            new Chicken(3, 2000),
            new Chicken(4, 2300),
            new Chicken(5, 2500),
            new Chicken(6, 3000),
            new Chicken(7, 3200),
            new Chicken(8, 3400),
            new Chicken(9, 3600),
            new Chicken(10, 3800),
            new Chicken(11, 4000),
            new Chicken(12, 4200),
            new Chicken(13, 4400),
            new Chicken(14, 4600),
            new Chicken(15, 4800),
            new Chicken(10, 5000),
            new Chicken(11, 5300),
            new Chicken(12, 6000),
            new Chicken(13, 6200),
            new Chicken(14, 6400),
            new Chicken(15, 6600),
            new Chicken(16, 6800),
            new Chicken(17, 7000),
            new Chicken(18, 7200),
            new Chicken(19, 7400),
            new Chicken(20, 7600),
            new Chicken(21, 7800),
            new Chicken(22, 8000),
            new Chicken(23, 8200),
        ],
        [
            new SmallChicken(0, 800),
            new SmallChicken(1, 1500),
            new SmallChicken(2, 1650),
            new SmallChicken(3, 1800),
            new SmallChicken(4, 2100),
            new SmallChicken(5, 2700),
            new SmallChicken(6, 3100),
            new SmallChicken(7, 3400),
            new SmallChicken(8, 3700),
            new SmallChicken(9, 4000),
            new SmallChicken(10, 4300),
            new SmallChicken(11, 4600),
            new SmallChicken(12, 4900),
            new SmallChicken(7, 5500),
            new SmallChicken(8, 5650),
            new SmallChicken(9, 5800),
            new SmallChicken(10, 6000),
            new SmallChicken(11, 6200),
            new SmallChicken(12, 6400),
            new SmallChicken(13, 6600),
            new SmallChicken(14, 6800),
            new SmallChicken(15, 7000),
            new SmallChicken(16, 7200),
            new SmallChicken(17, 7400),
            new SmallChicken(18, 7600),
            new SmallChicken(19, 7800),
        ],
        [
            new Endboss()
        ],
        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
        ],
        [
            new BackgroundObject('./assets/img/5_background/layers/air.png', -719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', -719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', -719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', -719 * 2),

            new BackgroundObject('./assets/img/5_background/layers/air.png', -719),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('./assets/img/5_background/layers/air.png', 0),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('./assets/img/5_background/layers/air.png', 719),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719  * 3),

            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 4),

            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719 * 5),

            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 6),
        ],
        [
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 200, 360),
            new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 500, 280),
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 870, 320),
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1050, 360),
            new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 1250, 225),
            new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 1325, 230),
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1600, 320),
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1880, 360),
            new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 1930, 240),
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 2000, 360),
            new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 2300, 167),
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 2700, 340),
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 3000, 360),
            new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 3360, 240),
            new Bottles('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 3740, 300),
        ],
        [
            new Coins('./assets/img/8_coin/coin_2.png', 250, 340),
            new Coins('./assets/img/8_coin/coin_2.png', 290, 300),
            new Coins('./assets/img/8_coin/coin_2.png', 330, 260),
            new Coins('./assets/img/8_coin/coin_2.png', 370, 220),
            new Coins('./assets/img/8_coin/coin_2.png', 410, 180),
            new Coins('./assets/img/8_coin/coin_2.png', 450, 180),
            new Coins('./assets/img/8_coin/coin_2.png', 490, 220),
            new Coins('./assets/img/8_coin/coin_2.png', 530, 260),
            new Coins('./assets/img/8_coin/coin_2.png', 570, 300),
            new Coins('./assets/img/8_coin/coin_2.png', 610, 340),

            new Coins('./assets/img/8_coin/coin_1.png', 1000, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 1000, 300),
            new Coins('./assets/img/8_coin/coin_1.png', 1000, 260),
            new Coins('./assets/img/8_coin/coin_1.png', 1000, 220),
            new Coins('./assets/img/8_coin/coin_1.png', 1000, 180),
            new Coins('./assets/img/8_coin/coin_1.png', 1000, 140),
            new Coins('./assets/img/8_coin/coin_1.png', 1000, 100),

            new Coins('./assets/img/8_coin/coin_1.png', 1200, 180),
            new Coins('./assets/img/8_coin/coin_1.png', 1400, 180),
            new Coins('./assets/img/8_coin/coin_1.png', 1600, 180),
            new Coins('./assets/img/8_coin/coin_1.png', 1800, 180),
            new Coins('./assets/img/8_coin/coin_1.png', 2000, 180),
            new Coins('./assets/img/8_coin/coin_1.png', 2200, 180),
            new Coins('./assets/img/8_coin/coin_1.png', 2400, 180),

            new Coins('./assets/img/8_coin/coin_1.png', 2800, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 2850, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 2900, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 2950, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 3000, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 3050, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 3100, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 3150, 340),
            new Coins('./assets/img/8_coin/coin_1.png', 3200, 340),

            new Coins('./assets/img/8_coin/coin_1.png', 3500, 260),
            new Coins('./assets/img/8_coin/coin_1.png', 3500, 220),
        ]
    );
}