json.key_format! camelize: :lower

json.extract! conversation, 
  :id, 
  :name, 
  :topic, 
  :purpose