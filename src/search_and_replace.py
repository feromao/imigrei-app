#!/usr/bin/env python3

import re

# Read the file
with open('/components/SearchResults.tsx', 'r') as f:
    content = f.read()

# Replace all occurrences of tracking-[0.6px] with tracking-[0.45px]
updated_content = content.replace('tracking-[0.6px]', 'tracking-[0.45px]')

# Write back to file
with open('/components/SearchResults.tsx', 'w') as f:
    f.write(updated_content)

print("Updated SearchResults.tsx successfully")