# README

# Chatspace

# version
$ ruby -v 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin18]
$ rails -v Rails 5.2.2

# Development Period
2019/03/01-03/16

group_users table
Column	Type	Options
user_id	references	null :false, foreign_key :true
group_id	references	null :false, foreign_key :true
Association
belongs_to :user
belongs_to :group
messages table
Column	Type	Options
content	text	
image	string	
user_id	references	null :false, foreign_key :true
group_id	references	null :false, foreign_key :true
Association
belongs_to :user
belongs_to :group
users table
Column	Type	Options
name	string	null :false, unique :true
email	string	null :false, unique :true
Association
has_many :messages
has_many :group_users
has_many :group, through::group_users
groups table
Column	Type	Options
name	string	null :false, unique :true, index
Association
has_many :messages
has_many :group_users
has_many :users through::group_users
