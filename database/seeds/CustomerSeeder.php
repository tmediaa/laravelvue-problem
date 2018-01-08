<?php

use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create("fa_IR");
        DB::table("customers")->truncate();
        for ($i = 0 ; $i<100;$i++){
            $customer = \App\Customer::create([
                "name"=>$faker->name,
                "email"=>$faker->email
            ]);
        }
    }
}
