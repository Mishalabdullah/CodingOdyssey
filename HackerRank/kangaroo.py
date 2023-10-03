def kangaroo(x1, v1, x2, v2):
    # Check if the kangaroos have the same initial position and velocity, in which case they'll meet immediately.
    if x1 == x2 and v1 == v2:
        return "YES"
    
    # Check if the kangaroos have the same velocity and different initial positions, in which case they'll never meet.
    if v1 == v2 and x1 != x2:
        return "NO"
    
    # Check if the kangaroos will meet at the same location after some number of jumps.
    # The condition for meeting is (x2 - x1) % (v1 - v2) == 0.
    if (x2 - x1) % (v1 - v2) == 0 and (x2 - x1) / (v1 - v2) >= 0:
        return "YES"
    else:
        return "NO"
