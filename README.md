Management Company

# How to use

## Prerequisite - PHP version (8.1+)

1. Clone the repository into your working environment

2. `git clone https://github.com/IlijaAngelov/management_system.git`

3. Change directory to the project `cd management_system`

4. Open the project in your favourite IDE

5. Copy the `.env.example` file and rename it to `.env`

6. Configure the Database - variables starting with `DB`
   - *Example *- 
   -  DB_CONNECTION=mysql
      DB_HOST=127.0.0.1
      DB_PORT=3306
      DB_DATABASE=management_system
      DB_USERNAME=root
      DB_PASSWORD=******

7. Run `composer install`

8. Run `php artisan migrate`

9. Run `php artisan serve`

10. Run `npm run dev` 

Note: Make Sure Laravel backend Project Run In Background
(Entry point: http://127.0.0.1:8000/ )
