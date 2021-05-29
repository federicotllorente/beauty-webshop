/* eslint-disable quotes */

const filters = {
	product_types: [
		{
			id: 1,
			name: 'Blush',
			query_param: 'product_type=blush'
		},
		{
			id: 2,
			name: 'Bronzer',
			query_param: 'product_type=bronzer'
		},
		{
			id: 3,
			name: 'Eyebrow',
			query_param: 'product_type=eyebrow'
		},
		{
			id: 4,
			name: 'Eyeliner',
			query_param: 'product_type=eyeliner'
		},
		{
			id: 5,
			name: 'Eyeshadow',
			query_param: 'product_type=eyeshadow'
		},
		{
			id: 6,
			name: 'Foundation',
			query_param: 'product_type=foundation'
		},
		{
			id: 7,
			name: 'Lip liner',
			query_param: 'product_type=lip_liner'
		},
		{
			id: 8,
			name: 'Lipstick',
			query_param: 'product_type=lipstick'
		},
		{
			id: 9,
			name: 'Mascara',
			query_param: 'product_type=mascara'
		},
		{
			id: 10,
			name: 'Nail polish',
			query_param: 'product_type=nail_polish'
		}
	],
	product_categories: [
		{
			id: 1,
			name: 'Powder',
			query_param: 'product_category=powder'
		},
		{
			id: 2,
			name: 'Cream',
			query_param: 'product_category=cream'
		},
		{
			id: 3,
			name: 'Pencil',
			query_param: 'product_category=pencil'
		},
		{
			id: 4,
			name: 'Liquid',
			query_param: 'product_category=liquid'
		},
		{
			id: 5,
			name: 'Gel',
			query_param: 'product_category=gel'
		},
		{
			id: 6,
			name: 'Palette',
			query_param: 'product_category=palette'
		},
		{
			id: 7,
			name: 'Concealer',
			query_param: 'product_category=concealer'
		},
		{
			id: 8,
			name: 'Contour',
			query_param: 'product_category=contour'
		},
		{
			id: 9,
			name: 'Mineral',
			query_param: 'product_category=mineral'
		},
		{
			id: 10,
			name: 'Bb cc',
			query_param: 'product_category=bb_cc'
		},
		{
			id: 11,
			name: 'Highlighter',
			query_param: 'product_category=highlighter'
		},
		{
			id: 12,
			name: 'Lipstick',
			query_param: 'product_category=lipstick'
		},
		{
			id: 13,
			name: 'Lip gloss',
			query_param: 'product_category=lip_gloss'
		},
		{
			id: 14,
			name: 'Lip stain',
			query_param: 'product_category=lip_stain'
		}
	],
	product_brands: [
		{
			id: 1,
			name: "almay",
			query_param: "brand=almay"
		},
		{
			id: 2,
			name: "alva",
			query_param: "brand=alva"
		},
		{
			id: 3,
			name: "anna sui",
			query_param: "brand=anna+sui"
		},
		{
			id: 4,
			name: "annabelle",
			query_param: "brand=annabelle"
		},
		{
			id: 5,
			name: "benefit",
			query_param: "brand=benefit"
		},
		{
			id: 6,
			name: "boosh",
			query_param: "brand=boosh"
		},
		{
			id: 7,
			name: "burt's bees",
			query_param: "brand=burt's+bees"
		},
		{
			id: 8,
			name: "butter london",
			query_param: "brand=butter+london"
		},
		{
			id: 9,
			name: "c'est moi",
			query_param: "brand=c'est+moi"
		},
		{
			id: 10,
			name: "cargo cosmetics",
			query_param: "brand=cargo+cosmetics"
		},
		{
			id: 11,
			name: "china glaze",
			query_param: "brand=china+glaze"
		},
		{
			id: 12,
			name: "clinique",
			query_param: "brand=clinique"
		},
		{
			id: 13,
			name: "coastal classic creation",
			query_param: "brand=coastal+classic+creation"
		},
		{
			id: 14,
			name: "colourpop",
			query_param: "brand=colourpop"
		},
		{
			id: 15,
			name: "covergirl",
			query_param: "brand=covergirl"
		},
		{
			id: 16,
			name: "dalish",
			query_param: "brand=dalish"
		},
		{
			id: 17,
			name: "deciem",
			query_param: "brand=deciem"
		},
		{
			id: 18,
			name: "dior",
			query_param: "brand=dior"
		},
		{
			id: 19,
			name: "dr. hauschka",
			query_param: "brand=dr.+hauschka"
		},
		{
			id: 20,
			name: "e.l.f.",
			query_param: "brand=e.l.f."
		},
		{
			id: 21,
			name: "essie",
			query_param: "brand=essie"
		},
		{
			id: 22,
			name: "fenty",
			query_param: "brand=fenty"
		},
		{
			id: 23,
			name: "glossier",
			query_param: "brand=glossier"
		},
		{
			id: 24,
			name: "green people",
			query_param: "brand=green+people"
		},
		{
			id: 25,
			name: "iman",
			query_param: "brand=iman"
		},
		{
			id: 26,
			name: "l'oreal",
			query_param: "brand=l'oreal"
		},
		{
			id: 27,
			name: "lotus cosmetics usa",
			query_param: "brand=lotus+cosmetics+usa"
		},
		{
			id: 28,
			name: "maia's mineral galaxy",
			query_param: "brand=maia's+mineral+galaxy"
		},
		{
			id: 29,
			name: "marcelle",
			query_param: "brand=marcelle"
		},
		{
			id: 30,
			name: "marienatie",
			query_param: "brand=marienatie"
		},
		{
			id: 31,
			name: "maybelline",
			query_param: "brand=maybelline"
		},
		{
			id: 32,
			name: "milani",
			query_param: "brand=milani"
		},
		{
			id: 33,
			name: "mineral fusion",
			query_param: "brand=mineral+fusion"
		},
		{
			id: 34,
			name: "misa",
			query_param: "brand=misa"
		},
		{
			id: 35,
			name: "mistura",
			query_param: "brand=mistura"
		},
		{
			id: 36,
			name: "moov",
			query_param: "brand=moov"
		},
		{
			id: 37,
			name: "nudus",
			query_param: "brand=nudus"
		},
		{
			id: 38,
			name: "nyx",
			query_param: "brand=nyx"
		},
		{
			id: 39,
			name: "orly",
			query_param: "brand=orly"
		},
		{
			id: 40,
			name: "pacifica",
			query_param: "brand=pacifica"
		},
		{
			id: 41,
			name: "penny lane organics",
			query_param: "brand=penny+lane+organics"
		},
		{
			id: 42,
			name: "physicians formula",
			query_param: "brand=physicians+formula"
		},
		{
			id: 43,
			name: "piggy paint",
			query_param: "brand=piggy+paint"
		},
		{
			id: 44,
			name: "pure anada",
			query_param: "brand=pure+anada"
		},
		{
			id: 45,
			name: "rejuva minerals",
			query_param: "brand=rejuva+minerals"
		},
		{
			id: 46,
			name: "revlon",
			query_param: "brand=revlon"
		},
		{
			id: 47,
			name: "sally b's skin yummies",
			query_param: "brand=sally+b's+skin+yummies"
		},
		{
			id: 48,
			name: "salon perfect",
			query_param: "brand=salon+perfect"
		},
		{
			id: 49,
			name: "sante",
			query_param: "brand=sante"
		},
		{
			id: 50,
			name: "sinful colours",
			query_param: "brand=sinful+colours"
		},
		{
			id: 51,
			name: "smashbox",
			query_param: "brand=smashbox"
		},
		{
			id: 52,
			name: "stila",
			query_param: "brand=stila"
		},
		{
			id: 53,
			name: "suncoat",
			query_param: "brand=suncoat"
		},
		{
			id: 54,
			name: "w3llpeople",
			query_param: "brand=w3llpeople"
		},
		{
			id: 55,
			name: "wet n wild",
			query_param: "brand=wet+n+wild"
		},
		{
			id: 56,
			name: "zorah",
			query_param: "brand=zorah"
		},
		{
			id: 57,
			name: "zorah biocosmetiques",
			query_param: "brand=zorah+biocosmetiques"
		}
	],
	product_tags: [
		{
			id: 1,
			name: 'Canadian',
			query_param_name: 'Canadian'
		},
		{
			id: 2,
			name: 'CertClean',
			query_param_name: 'CertClean'
		},
		{
			id: 3,
			name: 'Chemical Free',
			query_param_name: 'Chemical+Free'
		},
		{
			id: 4,
			name: 'Dairy Free',
			query_param_name: 'Dairy+Free'
		},
		{
			id: 5,
			name: 'EWG Verified',
			query_param_name: 'EWG+Verified'
		},
		{
			id: 6,
			name: 'EcoCert',
			query_param_name: 'EcoCert'
		},
		{
			id: 7,
			name: 'Fair Trade',
			query_param_name: 'Fair+Trade'
		},
		{
			id: 8,
			name: 'Gluten Free',
			query_param_name: 'Gluten+Free'
		},
		{
			id: 9,
			name: 'Hypoallergenic',
			query_param_name: 'Hypoallergenic'
		},
		{
			id: 10,
			name: 'Natural',
			query_param_name: 'Natural'
		},
		{
			id: 11,
			name: 'No Talc',
			query_param_name: 'No+Talc'
		},
		{
			id: 12,
			name: 'Non-GMO',
			query_param_name: 'Non-GMO'
		},
		{
			id: 13,
			name: 'Organic',
			query_param_name: 'Organic'
		},
		{
			id: 14,
			name: 'Peanut Free Product',
			query_param_name: 'Peanut+Free+Product'
		},
		{
			id: 15,
			name: 'Sugar Free',
			query_param_name: 'Sugar+Free'
		},
		{
			id: 16,
			name: 'USDA Organic',
			query_param_name: 'USDA+Organic'
		},
		{
			id: 17,
			name: 'Vegan',
			query_param_name: 'Vegan'
		},
		{
			id: 18,
			name: 'alcohol free',
			query_param_name: 'alcohol+free'
		},
		{
			id: 19,
			name: 'cruelty free',
			query_param_name: 'cruelty+free'
		},
		{
			id: 20,
			name: 'oil free',
			query_param_name: 'oil+free'
		},
		{
			id: 21,
			name: 'purpicks',
			query_param_name: 'purpicks'
		},
		{
			id: 22,
			name: 'silicone free',
			query_param_name: 'silicone+free'
		},
		{
			id: 23,
			name: 'water free',
			query_param_name: 'water+free'
		}
	]
}

export default (req, res) => {
	res.status(200).json(filters)
}