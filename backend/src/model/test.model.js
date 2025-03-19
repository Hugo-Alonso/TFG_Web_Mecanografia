import mongoose from "mongoose";
const { Schema } = mongoose;

const TestSchema = new Schema(
    {
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, // Referencia al usuario que hizo el test

    testType: {  
        type: String,  
        enum: ['wordsPerMinute', 'timeTest', 'custom'],  
        required: true  
    }, // Tipo de test (WPM, por tiempo o personalizado)

    language: { 
        type: String, 
        required: true, 
        default: 'es' 
    }, // Idioma del test, por defecto español

    createdAt: { 
        type: Date, 
        default: Date.now 
    }, // Fecha de creación del test

    // Configuración específica según el tipo de test
    config: { 
        duration: { 
            type: Number, 
            enum: [10, 20, 30, 60], 
            required: function() { 
                return this.testType === 'timetest'; 
            } 
        }, 

        wordCount: { 
            type: Number, 
            enum: [10, 25, 50, 100], 
            required: function() { 
                return this.testType === 'wordstest'; 
            } 
        }, 

        customText: { 
            type: String, 
            required: function() { 
                return this.testType === 'customtest'; 
            } 
        } 
    },

    // Resultados del test
    result: { 
            wpm: { 
            type: Number, 
            required: true 
            }, // Palabras por minuto (WPM)

            rawWPM: { 
            type: Number, 
            required: true 
            }, // WPM sin penalización

            accuracy: { 
            type: Number, 
            required: true 
            }, // Precisión %

            errors: { 
            type: Number, 
            required: true 
            }, // Número total de errores

            score: { 
            type: Number 
            } // (Opcional) Puntuación personalizada
        }
    }
);

const Test = mongoose.model('Test', TestSchema);

export default Test;
