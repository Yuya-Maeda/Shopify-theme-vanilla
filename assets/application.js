// Put your application javascript here

// if #sort_by selector change 
if ( document.getElementById('sort_by') != null) {

    document.querySelector('#sort_by').addEventListener('change', function (e)
    {   console.log("test change sort_by")
        var url = new URL(window.location.href); //changin new url location parameter 
        url.searchParams.set('sort_by', e.currentTarget.value);
        
        window.location = url.href // set url on window.location 
        
    });
    
}

// for variant select on Product page and change variant 
if (document.getElementById('productSelect') != null) {
    document.querySelector('#productSelect').addEventListener('change', function (e) {
        const url = new URL(window.location.href);
        url.searchParams.set('variant', e.currentTarget.value)
        console.log(url.href)
        window.location = url.href

    })
}



//for variant select on sticky addtocartform 

if (document.getElementById('stickyProductSelect') != null) {
    document.querySelector('#stickyProductSelect').addEventListener('change',function(e) {
        const url = new URL(window.location.href);
        url.searchParams.set('variant', e.currentTarget.value)
        console.log(url.href, 'sticky addtocartform variant')
        window.location =url.href
    })
}
