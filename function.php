<?php 

// class cekresi 
// {
//     // private $api_key = 'bf9f192c840084657936eb470e1f85c2f02754f15431c7d46b050d79206961d1';
//     // private $track = 'https://api.binderbyte.com/v1/track';


// require_once 'track.php';

$url = 'http://api.localhost:8080/v1/track?';
$api_key = 'bf9f192c840084657936eb470e1f85c2f02754f15431c7d46b050d79206961d12';
$courier = 'jne';
$awb = '8825112045716759';
// $courier = $_POST[''];
// $awb = $_POST[''];


// function get_city(){

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => '$url, $api_ke, $courier, $awb',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    echo $response;

    var_dump($response);
    exit;
    // $kota = get_city();
    $kota_array = json_decode($response, true);

    if ($kota_array ['status'] == 200) {
        echo "berhasil";

    }

    // echo var_dump($kota_array);
    // exit;
    // };

    echo "hello";

// class rajaongkir 
// {
//  private $key = '9f332e4a435899114c321cd9a8830507';
//  private $city_url = 'https://api.rajaongkir.com/starter/city';
//  private $cost_url = 'https://api.rajaongkir.com/starter/cost';
//  private $province_url = 'https://api.rajaongkir.com/starter/province';

//     function array_sort_by_column($arr, $col, $dir= SORT_DESC){
//         $sort_col =[];
//         foreach ($arr as $key => $value){
//             $sort_col[$key] = $value[$col];
//         }
//         array_multisort($sort_col, $dir, $arr);
//     }

//     function get_city(){
//         $curl = curl_init();

//         curl_setopt_array($curl, array(
//         CURLOPT_URL => $this->city_url,
//         CURLOPT_RETURNTRANSFER => true,
//         CURLOPT_ENCODING => "",
//         CURLOPT_MAXREDIRS => 10,
//         CURLOPT_TIMEOUT => 30,
//         CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//         CURLOPT_CUSTOMREQUEST => "GET",
//         CURLOPT_HTTPHEADER => array(
//             "key: {$this->key}"
//         ),
//         ));

//         $response = curl_exec($curl);
//         $err = curl_error($curl);

//         curl_close($curl);

//         if ($err) {
//         return "cURL Error #:" . $err;
//         } else {
//         return $response;
//         }
//     }

//     function get_cost($id_kota_asal, $id_kota_tujuan, $berat, $kurir){
//         $curl = curl_init();

//         curl_setopt_array($curl, array(
//         CURLOPT_URL => $this->cost_url,
//         CURLOPT_RETURNTRANSFER => true,
//         CURLOPT_ENCODING => "",
//         CURLOPT_MAXREDIRS => 10,
//         CURLOPT_TIMEOUT => 30,
//         CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//         CURLOPT_CUSTOMREQUEST => "POST",
//         CURLOPT_POSTFIELDS => "origin={$id_kota_asal}destination={$id_kota_tujuan}weight={$berat}courier={$kurir}",
//         CURLOPT_HTTPHEADER => array(
//             "content-type: application/x-www-form-urlencoded",
//             "key: {$this->key}"
//         ),
//         ));

//         $response = curl_exec($curl);
//         $err = curl_error($curl);

//         curl_close($curl);

//         if ($err) {
//         return "cURL Error #:" . $err;
//         } else {
//         return $response;
//         }
//     }
// };

?>


