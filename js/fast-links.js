function fast_links(id) {

    var links = [
        { target: '_self', type: 'group', label: 'Main', value: null },
        { target: '_self', type: 'link', label: 'Index', value: '/' },
        { target: '_self', type: 'group', label: 'Calculators', value: null },
        { target: '_self', type: 'link', label: 'Free Space Path Loss', value: 'calculator-free-space-path-loss.htm' },
        { target: '_self', type: 'link', label: 'LC Resonance', value: 'calculator-resonance-lc.htm' },
        { target: '_self', type: 'link', label: 'Passive LC Filter', value: 'calculator-filter-lc.htm' },
        { target: '_self', type: 'link', label: 'Passive RC Filter', value: 'calculator-filter-rc.htm' },
        { target: '_self', type: 'link', label: 'Passive RLC Filter', value: 'calculator-filter-rlc.htm' },
        { target: '_self', type: 'link', label: 'Inductive Reactance', value: 'calculator-reactance-inductive.htm' },
        { target: '_self', type: 'link', label: 'Capacitive Reactance', value: 'calculator-reactance-capacitive.htm' },
        { target: '_self', type: 'link', label: 'Decibel Amplitude', value: 'calculator-decibel-amplitude.htm' },
        { target: '_self', type: 'link', label: 'Decibel Power', value: 'calculator-decibel-power.htm' },
        { target: '_self', type: 'link', label: 'RMS Vp/DC', value: 'calculator-rms-vp-dc.htm' },
        { target: '_self', type: 'link', label: 'Ideal Transformer', value: 'calculator-ideal-transformer.htm' },
        { target: '_self', type: 'link', label: 'NPN Common Emitter Base Divider', value: 'calculator-npn-common-emitter-base-divider.htm' },
        { target: '_self', type: 'link', label: 'NPN Common Emitter', value: 'calculator-npn-common-emitter.htm' },
        { target: '_self', type: 'link', label: 'Coil Design', value: 'calculator-coil-design.htm' },
        { target: '_self', type: 'link', label: 'RC Charge Time', value: 'calculator-rc-charge-time.htm' },
        { target: '_self', type: 'link', label: 'LR Charge Time', value: 'calculator-lr-charge-time.htm' },
        { target: '_self', type: 'link', label: 'RC Phase Shift Oscillator', value: 'calculator-rc-phase-shift-oscillator.htm' }
    ];

    private_id = 'fast_links_' + (Math.random() * 1000).toFixed()
    select = $('<select id="'+private_id+'">');
    select.on( "change",
        function() {
            option = $(this).find(":selected");
            id = $(option).attr('data');
            if( links[id]['value'] ) {
                window.location.href = 'https://' + window.location.hostname + '/' + links[id]['value'];
            }
        }
    );
    
    current_page = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length)

    for( n in links ) {

        if( links[n]['type'] == 'group' ) {
            group = $('<optgroup>');
            group.attr('label',links[n]['label']);;
            group.attr('data',n);;
            select.append(group);
        }

        if( links[n]['type'] == 'option' ) {
            option = $('<option>');
            option.attr('label',links[n]['label']);
            option.attr('data',n)
            if( current_page == links[n]['value'] ) option.attr('selected','true')
            if(  typeof group !== 'undefined' )
                group.append(option);   
            else 
                select.append(option);
        }
    }

    $('#'+id).append('<label for="'+private_id+'">Fast Link`s</label><br>');
    $('#'+id).append(select);
    
}

function fast_links2(id) {
        
    var id = id
    var title = "Fast Link`s"

    var links = [
        { target: '_self', type: 'group', label: 'Main', value: null },
        { target: '_self', type: 'link', label: 'Index', value: '/' },
        { target: '_self', type: 'group', label: 'Calculators', value: null },
        { target: '_self', type: 'link', label: 'Free Space Path Loss', value: 'calculator-free-space-path-loss.htm' },
        { target: '_self', type: 'link', label: 'LC Resonance', value: 'calculator-resonance-lc.htm' },
        { target: '_self', type: 'link', label: 'Passive LC Filter', value: 'calculator-filter-lc.htm' },
        { target: '_self', type: 'link', label: 'Passive RC Filter', value: 'calculator-filter-rc.htm' },
        { target: '_self', type: 'link', label: 'Passive RLC Filter', value: 'calculator-filter-rlc.htm' },
        { target: '_self', type: 'link', label: 'Inductive Reactance', value: 'calculator-reactance-inductive.htm' },
        { target: '_self', type: 'link', label: 'Capacitive Reactance', value: 'calculator-reactance-capacitive.htm' },
        { target: '_self', type: 'link', label: 'Decibel Amplitude', value: 'calculator-decibel-amplitude.htm' },
        { target: '_self', type: 'link', label: 'Decibel Power', value: 'calculator-decibel-power.htm' },
        { target: '_self', type: 'link', label: 'RMS Vp/DC', value: 'calculator-rms-vp-dc.htm' },
        { target: '_self', type: 'link', label: 'Ideal Transformer', value: 'calculator-ideal-transformer.htm' },
        { target: '_self', type: 'link', label: 'NPN Common Emitter Base Divider', value: 'calculator-npn-common-emitter-base-divider.htm' },
        { target: '_self', type: 'link', label: 'NPN Common Emitter', value: 'calculator-npn-common-emitter.htm' },
        { target: '_self', type: 'link', label: 'Coil Design', value: 'calculator-coil-design.htm' },
        { target: '_self', type: 'link', label: 'RC Charge Time', value: 'calculator-rc-charge-time.htm' },
        { target: '_self', type: 'link', label: 'LR Charge Time', value: 'calculator-lr-charge-time.htm' },
        { target: '_self', type: 'link', label: 'RC Phase Shift Oscillator', value: 'calculator-rc-phase-shift-oscillator.htm' },
        { target: '_self', type: 'link', label: 'Serie RC or RL Degrees Phase Shift', value: 'calculator-rc-rl-degrees-phase-shift.htm' },
        { target: '_self', type: 'link', label: 'Ripple Voltage', value: 'calculator-ripple-voltage.htm' },
        { target: '_self', type: 'link', label: 'Colpitts Oscillator', value: 'calculator-oscillator-colpitts.htm' }
    ];

    $('#'+id).append('<p class="title">')
    $('#'+id+' > p').append(title)
    
    $('#'+id).append('<div><table></table></div>')
    $('#'+id+' > div > table').append('<tbody>')
    for( index in links ) {
        if( links[index].type == 'group') {
            $('#'+id+' > div > table > tbody').append('<tr><td><p class="group">'+links[index].label+'</p></td></tr>')
        }
        if( links[index].type == 'link') {
            $('#'+id+' > div > table > tbody').append('<tr><td><a class="link" href="'+links[index].value+'" target="'+links[index].target+'">'+links[index].label+'</a></td></tr>')
        }
    }

    $('#'+id+' > p.title').on('click',function(){
        visibility = $('#'+id+' > div').css('visibility')
        if( visibility == 'visible' || visibility == undefined ) {
            $('#'+id+' > div').css('visibility','hidden')
        } else {
            $('#'+id+' > div').css('visibility','visible')
            //SCROLL TO CURRENT PAGE INDEX
            current_page = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length)
            current_id = 0
            for( index in links ) {
                if( links[index].type == 'link' && links[index].value == current_page ) {
                    current_id = parseInt(index) + 1;
                    break;
                }
            }
            scrollTop = parseInt($('#'+id+' > div > table > tbody > tr:nth-child('+current_id+')').offset().top - $('#'+id+' > div').offset().top )
            $('#'+id+' > div').scrollTop( scrollTop );
            //END SCROLL TO CURRENT PAGE INDEX
        }
    })
}