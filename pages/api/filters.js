/* eslint-disable quotes */

const filters = {
	product_types: [
		{
			id: 1,
			name: 'Blush',
			query_param: 'product_type=blush',
			query_param_name: 'blush'
		},
		{
			id: 2,
			name: 'Bronzer',
			query_param: 'product_type=bronzer',
			query_param_name: 'bronzer'
		},
		{
			id: 3,
			name: 'Eyebrow',
			query_param: 'product_type=eyebrow',
			query_param_name: 'eyebrow'
		},
		{
			id: 4,
			name: 'Eyeliner',
			query_param: 'product_type=eyeliner',
			query_param_name: 'eyeliner'
		},
		{
			id: 5,
			name: 'Eyeshadow',
			query_param: 'product_type=eyeshadow',
			query_param_name: 'eyeshadow'
		},
		{
			id: 6,
			name: 'Foundation',
			query_param: 'product_type=foundation',
			query_param_name: 'foundation'
		},
		{
			id: 7,
			name: 'Lip liner',
			query_param: 'product_type=lip_liner',
			query_param_name: 'lip_liner'
		},
		{
			id: 8,
			name: 'Lipstick',
			query_param: 'product_type=lipstick',
			query_param_name: 'lipstick'
		},
		{
			id: 9,
			name: 'Mascara',
			query_param: 'product_type=mascara',
			query_param_name: 'mascara'
		},
		{
			id: 10,
			name: 'Nail polish',
			query_param: 'product_type=nail_polish',
			query_param_name: 'nail_polish'
		}
	],
	product_categories: [
		{
			id: 1,
			name: 'Powder',
			query_param: 'product_category=powder',
			query_param_name: 'powder'
		},
		{
			id: 2,
			name: 'Cream',
			query_param: 'product_category=cream',
			query_param_name: 'cream'
		},
		{
			id: 3,
			name: 'Pencil',
			query_param: 'product_category=pencil',
			query_param_name: 'pencil'
		},
		{
			id: 4,
			name: 'Liquid',
			query_param: 'product_category=liquid',
			query_param_name: 'liquid'
		},
		{
			id: 5,
			name: 'Gel',
			query_param: 'product_category=gel',
			query_param_name: 'gel'
		},
		{
			id: 6,
			name: 'Palette',
			query_param: 'product_category=palette',
			query_param_name: 'palette'
		},
		{
			id: 7,
			name: 'Concealer',
			query_param: 'product_category=concealer',
			query_param_name: 'concealer'
		},
		{
			id: 8,
			name: 'Contour',
			query_param: 'product_category=contour',
			query_param_name: 'contour'
		},
		{
			id: 9,
			name: 'Mineral',
			query_param: 'product_category=mineral',
			query_param_name: 'mineral'
		},
		{
			id: 10,
			name: 'Bb cc',
			query_param: 'product_category=bb_cc',
			query_param_name: 'bb_cc'
		},
		{
			id: 11,
			name: 'Highlighter',
			query_param: 'product_category=highlighter',
			query_param_name: 'highlighter'
		},
		{
			id: 12,
			name: 'Lipstick',
			query_param: 'product_category=lipstick',
			query_param_name: 'lipstick'
		},
		{
			id: 13,
			name: 'Lip gloss',
			query_param: 'product_category=lip_gloss',
			query_param_name: 'lip_gloss'
		},
		{
			id: 14,
			name: 'Lip stain',
			query_param: 'product_category=lip_stain',
			query_param_name: 'lip_stain'
		}
	],
	product_brands: [
		{
			id: 1,
			name: "almay",
			query_param: "brand=almay",
			query_param_name: "almay"
		},
		{
			id: 2,
			name: "alva",
			query_param: "brand=alva",
			query_param_name: "alva"
		},
		{
			id: 3,
			name: "anna sui",
			query_param: "brand=anna+sui",
			query_param_name: "anna+sui"
		},
		{
			id: 4,
			name: "annabelle",
			query_param: "brand=annabelle",
			query_param_name: "annabelle"
		},
		{
			id: 5,
			name: "benefit",
			query_param: "brand=benefit",
			query_param_name: "benefit"
		},
		{
			id: 6,
			name: "boosh",
			query_param: "brand=boosh",
			query_param_name: "boosh"
		},
		{
			id: 7,
			name: "burt's bees",
			query_param: "brand=burt's+bees",
			query_param_name: "burt's+bees"
		},
		{
			id: 8,
			name: "butter london",
			query_param: "brand=butter+london",
			query_param_name: "butter+london"
		},
		{
			id: 9,
			name: "c'est moi",
			query_param: "brand=c'est+moi",
			query_param_name: "c'est+moi"
		},
		{
			id: 10,
			name: "cargo cosmetics",
			query_param: "brand=cargo+cosmetics",
			query_param_name: "cargo+cosmetics"
		},
		{
			id: 11,
			name: "china glaze",
			query_param: "brand=china+glaze",
			query_param_name: "china+glaze"
		},
		{
			id: 12,
			name: "clinique",
			query_param: "brand=clinique",
			query_param_name: "clinique"
		},
		{
			id: 13,
			name: "coastal classic creation",
			query_param: "brand=coastal+classic+creation",
			query_param_name: "coastal+classic+creation"
		},
		{
			id: 14,
			name: "colourpop",
			query_param: "brand=colourpop",
			query_param_name: "colourpop"
		},
		{
			id: 15,
			name: "covergirl",
			query_param: "brand=covergirl",
			query_param_name: "covergirl"
		},
		{
			id: 16,
			name: "dalish",
			query_param: "brand=dalish",
			query_param_name: "dalish"
		},
		{
			id: 17,
			name: "deciem",
			query_param: "brand=deciem",
			query_param_name: "deciem"
		},
		{
			id: 18,
			name: "dior",
			query_param: "brand=dior",
			query_param_name: "dior"
		},
		{
			id: 19,
			name: "dr. hauschka",
			query_param: "brand=dr.+hauschka",
			query_param_name: "dr.+hauschka"
		},
		{
			id: 20,
			name: "e.l.f.",
			query_param: "brand=e.l.f.",
			query_param_name: "e.l.f."
		},
		{
			id: 21,
			name: "essie",
			query_param: "brand=essie",
			query_param_name: "essie"
		},
		{
			id: 22,
			name: "fenty",
			query_param: "brand=fenty",
			query_param_name: "fenty"
		},
		{
			id: 23,
			name: "glossier",
			query_param: "brand=glossier",
			query_param_name: "glossier"
		},
		{
			id: 24,
			name: "green people",
			query_param: "brand=green+people",
			query_param_name: "green+people"
		},
		{
			id: 25,
			name: "iman",
			query_param: "brand=iman",
			query_param_name: "iman"
		},
		{
			id: 26,
			name: "l'oreal",
			query_param: "brand=l'oreal",
			query_param_name: "l'oreal"
		},
		{
			id: 27,
			name: "lotus cosmetics usa",
			query_param: "brand=lotus+cosmetics+usa",
			query_param_name: "lotus+cosmetics+usa"
		},
		{
			id: 28,
			name: "maia's mineral galaxy",
			query_param: "brand=maia's+mineral+galaxy",
			query_param_name: "maia's+mineral+galaxy"
		},
		{
			id: 29,
			name: "marcelle",
			query_param: "brand=marcelle",
			query_param_name: "marcelle"
		},
		{
			id: 30,
			name: "marienatie",
			query_param: "brand=marienatie",
			query_param_name: "marienatie"
		},
		{
			id: 31,
			name: "maybelline",
			query_param: "brand=maybelline",
			query_param_name: "maybelline"
		},
		{
			id: 32,
			name: "milani",
			query_param: "brand=milani",
			query_param_name: "milani"
		},
		{
			id: 33,
			name: "mineral fusion",
			query_param: "brand=mineral+fusion",
			query_param_name: "mineral+fusion"
		},
		{
			id: 34,
			name: "misa",
			query_param: "brand=misa",
			query_param_name: "misa"
		},
		{
			id: 35,
			name: "mistura",
			query_param: "brand=mistura",
			query_param_name: "mistura"
		},
		{
			id: 36,
			name: "moov",
			query_param: "brand=moov",
			query_param_name: "moov"
		},
		{
			id: 37,
			name: "nudus",
			query_param: "brand=nudus",
			query_param_name: "nudus"
		},
		{
			id: 38,
			name: "nyx",
			query_param: "brand=nyx",
			query_param_name: "nyx"
		},
		{
			id: 39,
			name: "orly",
			query_param: "brand=orly",
			query_param_name: "orly"
		},
		{
			id: 40,
			name: "pacifica",
			query_param: "brand=pacifica",
			query_param_name: "pacifica"
		},
		{
			id: 41,
			name: "penny lane organics",
			query_param: "brand=penny+lane+organics",
			query_param_name: "penny+lane+organics"
		},
		{
			id: 42,
			name: "physicians formula",
			query_param: "brand=physicians+formula",
			query_param_name: "physicians+formula"
		},
		{
			id: 43,
			name: "piggy paint",
			query_param: "brand=piggy+paint",
			query_param_name: "piggy+paint"
		},
		{
			id: 44,
			name: "pure anada",
			query_param: "brand=pure+anada",
			query_param_name: "pure+anada"
		},
		{
			id: 45,
			name: "rejuva minerals",
			query_param: "brand=rejuva+minerals",
			query_param_name: "rejuva+minerals"
		},
		{
			id: 46,
			name: "revlon",
			query_param: "brand=revlon",
			query_param_name: "revlon"
		},
		{
			id: 47,
			name: "sally b's skin yummies",
			query_param: "brand=sally+b's+skin+yummies",
			query_param_name: "sally+b's+skin+yummies"
		},
		{
			id: 48,
			name: "salon perfect",
			query_param: "brand=salon+perfect",
			query_param_name: "salon+perfect"
		},
		{
			id: 49,
			name: "sante",
			query_param: "brand=sante",
			query_param_name: "sante"
		},
		{
			id: 50,
			name: "sinful colours",
			query_param: "brand=sinful+colours",
			query_param_name: "sinful+colours"
		},
		{
			id: 51,
			name: "smashbox",
			query_param: "brand=smashbox",
			query_param_name: "smashbox"
		},
		{
			id: 52,
			name: "stila",
			query_param: "brand=stila",
			query_param_name: "stila"
		},
		{
			id: 53,
			name: "suncoat",
			query_param: "brand=suncoat",
			query_param_name: "suncoat"
		},
		{
			id: 54,
			name: "w3llpeople",
			query_param: "brand=w3llpeople",
			query_param_name: "w3llpeople"
		},
		{
			id: 55,
			name: "wet n wild",
			query_param: "brand=wet+n+wild",
			query_param_name: "wet+n+wild"
		},
		{
			id: 56,
			name: "zorah",
			query_param: "brand=zorah",
			query_param_name: "zorah"
		},
		{
			id: 57,
			name: "zorah biocosmetiques",
			query_param: "brand=zorah+biocosmetiques",
			query_param_name: "zorah+biocosmetiques"
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