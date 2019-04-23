# README
writer yotuba088

# Description
FS47b is Melcari clone app created by Tech Expert 47b(Contributors)

# Features
- ユーザー新規登録・ログイン機能・SNS連携(omnioauth gem)
- 商品出品・購入・編集
- カテゴリー・ブランド機能
- クレジットカード登録・利用購入(payjp)
- マイページ機能・編集
- 商品検索機能(Ransack gem)

# Requirement
- ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin18]
- Rails 5.2.2.1

# Development Period
- 2019/03/27-04/19 team
- 4/21- 

# Database
## users TB

| Column | Type | Options |
|:-----------|------------:|:------------:|
| nickname | string | null: false |
| email | string | null: false, unique: true |
| last_name | string | -- |
| first_name | string | -- |
| last_name_kana | string | -- |
| first_name_kana | string | -- |
| city | string | -- |
| block | string | -- |
| building | string | -- |
| birth_year | integer | -- |
| birth_month | integer | -- |
| birth_day | integer | -- |
| phone_number | string | -- |
| zipcode | string | -- |
| prefecture | integer | -- |

- has_many :items
- has_many :trading_partners
- has_many :sns_credentials
- has_many :credit_cards



# README

# Chatspace

# version
$ ruby -v 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin18]
$ rails -v Rails 5.2.2

# Development Period
2019/03/01-03/16

## group_users table
user_id	references	null :false, foreign_key :true
group_id	references	null :false, foreign_key :true
### Association
belongs_to :user
belongs_to :group

## messages table
content	text	
image	string	
user_id	references	null :false, foreign_key :true
group_id	references	null :false, foreign_key :true
### Association
belongs_to :user
belongs_to :group

## users table
name	string	null :false, unique :true
email	string	null :false, unique :true
### Association
has_many :messages
has_many :group_users
has_many :group, through::group_users

## groups table
name	string	null :false, unique :true, index
### Association
has_many :messages
has_many :group_users
has_many :users through::group_users
