def median( a ) 
  if a.length.odd?
    a[ a.length / 2]
  else
    (a[ (a.length / 2) - 1] + a[ a.length / 2]) / 2.0
  end
end

def median_of_two_sorted_arrays( arr1, arr2 )
  len = arr1.length
  
  return (arr1[0] + arr2[0]) / 2.0 if len == 1
  if len == 2
    return ( [ arr1[0], arr2[0] ].max + [ arr1[1], arr2[1] ].min ) / 2.0 
  end
  
  m1 = median( arr1 )
  m2 = median( arr2 )
  
  return m1 if m1 == m2
  
  if m1 < m2
    if arr1.length.odd?
      new_arr1 = arr1[ (len/2)..-1 ]
      new_arr2 = arr2[ 0..(len/2) ]
      median_of_two_sorted_arrays(new_arr1, new_arr2)
    else
      new_arr1 = arr1[ (len/2)..-1 ]
      new_arr2 = arr2[ 0...(len/2) ] 
      median_of_two_sorted_arrays(new_arr1, new_arr2)
    end
  else
    if arr1.length.odd?
      new_arr1 = arr1[ 0..(len/2) ] 
      new_arr2 = arr2[ (len/2)..-1 ]
      median_of_two_sorted_arrays(new_arr1, new_arr2)
    else
      new_arr1 = arr1[ 0...(len/2) ] 
      new_arr2 = arr2[ (len/2)..-1 ]
      median_of_two_sorted_arrays(new_arr1, new_arr2)
    end
  end
end



if __FILE__ == $0
  a = [1, 2, 3]
  b = [1, 2, 3]
  p median_of_two_sorted_arrays(a, b)
end



