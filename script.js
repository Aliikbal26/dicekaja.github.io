$('#track').on('click', function() 
{


    // ?api_key=f8000a7fa7be89bb3796d9a753d248c2d1c0ac04ac994b7cb860b31240a730d1&courier=jne&awb=8825112045716759

    // var settings = {
    //     "url": "https://api.binderbyte.com/v1/track",
    //     "method": "GET",
    //     "timeout": 0,
    //     "data":{
    //         'api_key': 'bf9f192c840084657936eb470e1f85c2f02754f15431c7d46b050d79206961d1',
    //         'courier' : $('#courier').val(),
    //         'awb' : $('#no-resi').val() 
    //     },
 
    //     success : function(result){
    //         if (result.Response == "True"){
    //             let histori = result.data;
    //             console.log(histori);
    //             // $.each(histori, function ())
    //         }
    //     }
    //     };

    //   $.ajax(settings).done(function (response) {
    //       console.log(response);
    //     });





        var settings = {
            "url": "https://api.binderbyte.com/v1/track",
            "method": "GET",
            "timeout": 0,
            "data":
            {
                'api_key': 'bf9f192c840084657936eb470e1f85c2f02754f15431c7d46b050d79206961d1',
                'courier' : $('#courier').val(),
                'awb' : $('#no-resi').val(),
            },
        };

          $.ajax(settings).done(function (response) {
            if (response.status === 200)
            {
                let histori = response.data;

                // $.each(histori, function(summary, data){
                //     $('#card-text').append(`
               
                $('#card-text').html(`
                <div class ="container ">
                <div class="col-md-9">
                        <table class ="table table-striped table-bordered borderd-secondary">
                            <h3>Data Pengiriman</h3>
                            <tr>
                                <td> No Resi </td>
                                <td> `+ histori.summary.awb +`</td>
                            </tr>
                            <tr>
                                <td> Kurir Pengirim </td>
                                <td> `+ histori.summary.courier +`</td>
                            </tr>
                            <tr>
                                <td> Service</td>
                                <td> `+ histori.summary.service +`</td>
                            </tr>
                            <tr>
                                <td> Status </td>
                                <td> `+ histori.summary.status +`</td>
                            </tr>
                            <tr>
                                <td> Tanggal Pengiriman </td>
                                <td> `+ histori.summary.date +`</td>
                            </tr>
                            <tr>
                            <td> Kota Tujuan</td>
                            <td> `+ histori.detail.origin +`</td>
                            </tr>
                            <tr>
                                <td> Alamat Tujuan </td>
                                <td> `+ histori.detail.destination +`</td>
                            </tr>
                            <tr>
                                <td> Nama Pengirim </td>
                                <td> `+ histori.detail.shipper+`</td>
                            </tr>
                            <tr>
                                <td> Nama Penerima </td>
                                <td> `+ histori.detail.receiver +`</td>
                            </tr>
                            <tr>
                                <td> Deskripsi </td>
                                <td> `+ histori.summary.desc +`</td>
                            </tr>
                        </table>
                            
                    
                        <table class ="table table-striped table-bordered">
                            <h3> History Pengiriman</h3>
                                <tr>
                                    <td> Kota Tujuan</td>
                                    <td> `+ histori.history.date +`</td>
                                </tr>
                                <tr>
                                    <td> Alamat Tujuan </td>
                                    <td> `+ histori.history.desc +`</td>
                                </tr>
                                <tr>
                                    <td> Nama Pengirim </td>
                                    <td> `+ histori.history.location+`</td>
                                </tr>
                        </table>
                            
                </div>
                </div>
             
            `)                
            } else {
                $('#notfound').html(`
                
                <div class="col">
                <h1 class="text-center">`+response.message+`</h1>
                </div>
                
                `)
            }
          
        });
      
});

var form = new FormData();
form.append("nik", "1234567891123456");
form.append("name", "nama ktp anda");
form.append("birthplace", "cilegon");
form.append("birthdate", "00-00-1999");
form.append("address", "alamat ktp anda");

var settings = {
  "url": "https://api.binderbyte.com/v1/validation/ktp?api_key=ecd876b89cexxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});