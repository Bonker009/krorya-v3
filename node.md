public key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjYmVnb3h2ZHZvZG1nY2F2bmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2Njg4MjIsImV4cCI6MjAzNjI0NDgyMn0.\_KwqLQW9-0CTsHFuX1erozMgzdEMguF9CnZZsiMyr_o

project url : https://ccbegoxvdvodmgcavncn.supabase.co

api key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjYmVnb3h2ZHZvZG1nY2F2bmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2Njg4MjIsImV4cCI6MjAzNjI0NDgyMn0.\_KwqLQW9-0CTsHFuX1erozMgzdEMguF9CnZZsiMyr_o

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ccbegoxvdvodmgcavncn.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
