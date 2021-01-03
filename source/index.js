void function 
()
{
  //;console
  //;  .log( 'index.js' )

  const rex_re =
    REX_o
      .new__re( 'g' )
  console
    .table
    (
      'one1_s something and two_2__f, or THREE_o to end'
        .match
        (
          rex_re
            `
            (             //: start capture
            [a-zA-Z_]+?   //: letter(s) at start
            [\d]{0,2}     //: then 1 or 2 digit(s)
            _{1,2}        //: then 1 or 2 underscore(s)
            [saof]{1}     //: then 1 or 2 char(s)
            )             //: end capture
            `
        )
    )
}()