def timeConversion(s):
    # Check if the time is in AM or PM
    if s[-2:] == 'AM':
        if s[:2] == '12':
            # Special case for 12 AM, convert to 00
            return '00' + s[2:-2]
        else:
            # Remove 'AM' and return as is
            return s[:-2]
    elif s[-2:] == 'PM':
        if s[:2] == '12':
            # Special case for 12 PM, keep as is
            return s[:-2]
        else: 
            # Add 12 to the hour part and remove 'PM'
            return str(int(s[:2]) + 12) + s[2:-2]
